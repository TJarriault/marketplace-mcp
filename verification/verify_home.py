from playwright.sync_api import Page, expect, sync_playwright
import os

def verify_home_page(page: Page):
    print("Navigating to Home Page...")
    page.goto("http://localhost:3000")
    
    print("Checking for title...")
    expect(page).to_have_title("MCP Marketplace")
    
    print("Checking for search input...")
    search_input = page.get_by_placeholder("Search agents by name, description, or tag...")
    expect(search_input).to_be_visible()
    
    print("Searching for 'Postgres'...")
    search_input.fill("Postgres")
    
    # Wait for filtering to happen (React state update)
    page.wait_for_timeout(500)
    
    print("Checking if 'Postgres Explorer' is visible...")
    postgres_card = page.get_by_text("Postgres Explorer")
    expect(postgres_card).to_be_visible()
    
    print("Taking screenshot...")
    page.screenshot(path="/home/jules/verification/home_search.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_home_page(page)
            print("Verification script completed successfully.")
        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()
