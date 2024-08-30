import { Page, expect } from "@playwright/test";
import { HelpBase } from "./helperBase";


export class DatepickerPage extends HelpBase {
   
    constructor (page: Page){
        super(page)
    
    }
    async selectCommonDatePickerBeforeFromToday(numberOfDaysFromToday) {
        
        const calenderInputField = this.page.getByPlaceholder('Form Picker')
        await calenderInputField.click()
        await this.page.waitForTimeout(500)
        const dateToAssert = await this.selectDateIntheCalender(numberOfDaysFromToday)
        await expect(calenderInputField).toHaveValue(dateToAssert)
       


    }

    async selectDatepickerWithRangeFromToday(startDateFromToday: number, endDayFromToday: number){
       // await this.page.waitForTimeout(2000)
        const calenderInputField = this.page.getByPlaceholder('Range Picker')
        await calenderInputField.click()
        await this.page.waitForTimeout(500) 
        const dateToAssertStart = await this.selectDateIntheCalender(startDateFromToday)
        const dateToassertEnd = await this.selectDateIntheCalender(endDayFromToday)
        const dateToAssert = `${dateToAssertStart} - ${dateToassertEnd}`
        await expect(calenderInputField).toHaveValue(dateToAssert)


    }

    private async selectDateIntheCalender (numberOfDaysFromToday: number){
        let date = new Date()
        date.setDate(date.getDate() + numberOfDaysFromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' })
        const expectedMonthLog = date.toLocaleString('En-US', { month: 'long' })
    
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
    
        let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLog} ${expectedYear}`
    
        while (!calendarMonthAndYear.includes(expectedMonthAndYear)) {
           this. page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
    
        }
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, { exact: true }).click()
       
        return dateToAssert
    }
    



}

