import EventListTmpl from './templates/eventList.njk';
import EventTableTmpl from './templates/eventTable.njk';
import EventDetailsTmpl from './templates/eventPage.njk';
import RegistrationFormTmpl from './templates/registrationPage.njk';
import SidebarTmpl from './templates/sidebarEventList.njk';
import TrainerListTmpl from './templates/trainerList.njk';
import TrainerPageTmpl from './templates/trainerPage.njk';

class Template {
    constructor(tmpl) {
        this.tmpl = tmpl;
    }

    render(data) {
        return this.tmpl.render(data);
    }
}

export default class Templates {
    constructor() {
        this.eventList = new Template(EventListTmpl);
        this.eventPage = new Template(EventDetailsTmpl);
        this.trainerList = new Template(TrainerListTmpl);
        this.trainerPage = new Template(TrainerPageTmpl);
        this.registrationPage = new Template(RegistrationFormTmpl);
        this.sidebar = new Template(SidebarTmpl);
    }

    setEventListType(table) {
        if (table) {
            this.eventList = new Template(EventTableTmpl);
        } else {
            this.eventList = new Template(EventListTmpl);
        }
    }
}
