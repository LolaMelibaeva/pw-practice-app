import {Page, expect} from "@playwright/test"
import { NavigationPage } from "./navigationPage"
import { FormLayoutPage } from "./formLayoutPage"
import { DatepickerPage } from "./datepickerPage"


export class PageManager {
    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formlayoutPage: FormLayoutPage
    private readonly datepickerPage: DatepickerPage

    constructor (page: Page){
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formlayoutPage = new FormLayoutPage(this.page)
        this.datepickerPage = new DatepickerPage(this.page)

        }

        navigateTo(){
            return this.navigationPage
        }

        onFormLayoutsPage(){
            return this.formlayoutPage
        }

        onDatepickerPage(){
            return this.datepickerPage
        }
}
