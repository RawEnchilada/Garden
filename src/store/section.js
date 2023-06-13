import { defineStore } from 'pinia'


export const useSectionStore = defineStore('sections', {
state: () => ({
    sections: [],
    positions: [],
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
}),
actions: {
    scrollTo(index){
        if(window.innerHeight < 500)return;
        const y = this.positions[index];
        window.scrollTo({top: y, behavior: 'smooth'});
        //element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    },
    addSection(section){
        const offset = -75;
        const y = section.getBoundingClientRect().top + window.pageYOffset + offset;
        this.sections.push(section);
        this.positions.push(y);
        return {
            index: this.sections.length - 1,
            position: y
        };
    },
    reset(){
        this.sections = [];
        this.positions = [];
    }
}
});