
declare namespace OrgChart {
    enum orientation {
        top,
        left,
        right
    }
    enum action {
        /**
         * mouseScrool value
         */
        zoom,
        /**
         * mouseScrool value
         */
        xScroll,
        /**
         * mouseScrool value
         */
        yScroll,
        /**
         * nodeMouseClick value
         */
        edit, 
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        details,
        /**
         * nodeMouseClick and nodeMouseDbClick value
         */
        expandCollapse, 
        /**
         * nodeMouseClick, nodeMouseDbClick and mouseScrool value
         */
        none,
    }
    enum scroll {
        visible,
    }

    enum match {
        height,
        width,
        boundary
    }

    enum anim {
        inPow,
        outPow,
        inOutPow,
        inSin,
        outSin,
        inOutSin,
        inExp,
        outExp,
        inOutExp,
        inCirc,
        outCirc,
        inOutCirc,
        rebound,
        inBack,
        outBack,
        inOutBack
    }

    const none: any;
    const normal: any;
    const CENTER: any;
    const ORIENTATION: any;

    
}
    
interface  options{
    lazyLoading?: boolean,
    enableSearch?: boolean,
    orientation?: OrgChart.orientation,
    mouseScrool?: OrgChart.action,
    nodeBinding?: Object,
    enableDragDrop?: boolean,
    enableTouch?: boolean,
    nodeMenu?: Object,
    nodeContextMenu?: Object,
    dragDropMenu?: Object,
    menu?: Object,
    toolbar?: boolean,
    sticky?: boolean,
    nodeMouseClick?: OrgChart.action,
    nodeMouseDdClick?: OrgChart.action,
    showXScroll?: OrgChart.scroll,
    showYScroll?: OrgChart.scroll,
    template?: string,
    tags?: Object,
    linkBinding?: Object,
    searchFields?: Array<string>,
    nodes?: Array<Object>,
    clinks?: Array<Object>,
    slinks?: Array<Object>,
    levelSeparation?: number,
    siblingSeparation?: number,
    subtreeSeparation?: number,
    mixedHierarchyNodesSeparation?: number,
    padding?: number,
    layout?: OrgChart,
    scaleInitial?: OrgChart.match | number,
    scaleMin?: number,
    scaleMax?: number,
    orderBy?: string,
    editUI?: Object,
    searchUI?: Object,
    xScrollUI?: Object,
    yScrollUI?: Object,
    nodeMenuUI?: Object,
    nodeContextMenuUI?: Object,
    toolbarUI?: Object,
    notifierUI?: Object,
    dragDropMenuUI?: Object,
    menuUI?: Object,
    exportUrl?: string,
    collapse?: Object,
    expand?: Object,
    align?: OrgChart,
    UI?: OrgChart,
    anim?: Object,
    zoom?: Object,
    roots?: Array<number>,
    onUpdate?: string,
    onRemove?: string,
    onAdd?: string,
    onRedraw?: string,
    onImageUploaded?: string,
    onUpdateTags?: string,
    onClick?: string,
    onDbClick?: string,
    onExpCollClick?: string,
    onExportStart?: string,
    onExportEnd?: string,
    onSearchClick?: string,
    onready?: string

}

declare class OrgChart {
    constructor(element: HTMLElement, options: options);

    /**
     * Loads org chart
     * @param nodes 
     */
   load(nodes: Array<Object>) : void;
     // load(nodes: Array<JSON>): void;
    fit(): void;
}