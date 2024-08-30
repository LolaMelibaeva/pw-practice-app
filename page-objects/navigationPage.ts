import { Locator, Page } from "@playwright/test"
import { HelpBase } from "./helperBase"

export class NavigationPage extends HelpBase {
   
    readonly fromLayoutMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page) {
        super(page)
        this.fromLayoutMenuItem = this.page.getByText("Form Layouts")
        this.datePickerMenuItem = this.page.getByText("Datepicker")
        this.smartTableMenuItem = this.page.getByText("Smart Table")
        this.toastMenuItem = this.page.getByText("Toastr")
        this.tooltipMenuItem = this.page.getByText("Tooltip")

    }

    async formLayoutsPage() {
        await this.selectGroupMenuItem('Forms')
        await this.fromLayoutMenuItem.click()
        await this.waitForNumberOfSeconds(2)
    }

    async datepickerPage() {
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()
        
    }

    async smartTablePage() {
        await this.selectGroupMenuItem("Tables & Data")
        await this.smartTableMenuItem.click()

    }

    async toastrPage() {
        this.selectGroupMenuItem("Modal & Overlays")
        await this.toastMenuItem.click()

    }
    async tooltipPage() {

        this.selectGroupMenuItem("Modal & Overlays")
        await this.tooltipMenuItem.click()

    }

    private async selectGroupMenuItem(groutItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groutItemTitle)
        const expandState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandState == 'false') {
            await groupMenuItem.click()
        }

    }


}
