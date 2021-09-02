import {ClearRequestBuilder} from './clear/clearRequestBuilder';
import {DeleteRequestBuilder} from './delete/deleteRequestBuilder';
import {InsertRequestBuilder} from './insert/insertRequestBuilder';
import {MergeRequestBuilder} from './merge/mergeRequestBuilder';
import {UnmergeRequestBuilder} from './unmerge/unmergeRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange  */
export class WorkbookRangeRequestBuilder {
    public get clear(): ClearRequestBuilder {
        return new ClearRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Current path for the request  */
    private readonly currentPath: string;
    public get delete(): DeleteRequestBuilder {
        return new DeleteRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** The http core service to use to execute the requests.  */
    private readonly httpCore: HttpCore;
    public get insert(): InsertRequestBuilder {
        return new InsertRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Whether the current path is a raw URL  */
    private readonly isRawUrl: boolean;
    public get merge(): MergeRequestBuilder {
        return new MergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /** Path segment to use to build the URL for the current request builder  */
    private readonly pathSegment: string;
    public get unmerge(): UnmergeRequestBuilder {
        return new UnmergeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    }
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.boundingRect(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a boundingRectRequestBuilder
     */
    public boundingRect(anotherRange: string | undefined) : BoundingRectRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new BoundingRectRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, anotherRange);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.cell(row={row},column={column})
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellRequestBuilder
     */
    public cell(row: number | undefined, column: number | undefined) : CellRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, row, column);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.column(column={column})
     * @param column Usage: column={column}
     * @returns a columnRequestBuilder
     */
    public column(column: number | undefined) : ColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        return new ColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, column);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsAfter()
     * @returns a columnsAfterRequestBuilder
     */
    public columnsAfter() : ColumnsAfterRequestBuilder {
        return new ColumnsAfterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsBefore()
     * @returns a columnsBeforeRequestBuilder
     */
    public columnsBefore() : ColumnsBeforeRequestBuilder {
        return new ColumnsBeforeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Instantiates a new WorkbookRangeRequestBuilder and sets the default values.
     * @param currentPath Current path for the request
     * @param httpCore The http core service to use to execute the requests.
     * @param isRawUrl Whether the current path is a raw URL
     */
    public constructor(currentPath: string, httpCore: HttpCore, isRawUrl: boolean = true) {
        if(!currentPath) throw new Error("currentPath cannot be undefined");
        if(!httpCore) throw new Error("httpCore cannot be undefined");
        this.pathSegment = "/microsoft.graph.workbookRange";
        this.httpCore = httpCore;
        this.currentPath = currentPath;
        this.isRawUrl = isRawUrl;
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.entireColumn()
     * @returns a entireColumnRequestBuilder
     */
    public entireColumn() : EntireColumnRequestBuilder {
        return new EntireColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.entireRow()
     * @returns a entireRowRequestBuilder
     */
    public entireRow() : EntireRowRequestBuilder {
        return new EntireRowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.intersection(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a intersectionRequestBuilder
     */
    public intersection(anotherRange: string | undefined) : IntersectionRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new IntersectionRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, anotherRange);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastCell()
     * @returns a lastCellRequestBuilder
     */
    public lastCell() : LastCellRequestBuilder {
        return new LastCellRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastColumn()
     * @returns a lastColumnRequestBuilder
     */
    public lastColumn() : LastColumnRequestBuilder {
        return new LastColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastRow()
     * @returns a lastRowRequestBuilder
     */
    public lastRow() : LastRowRequestBuilder {
        return new LastRowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.offsetRange(rowOffset={rowOffset},columnOffset={columnOffset})
     * @param columnOffset Usage: columnOffset={columnOffset}
     * @param rowOffset Usage: rowOffset={rowOffset}
     * @returns a offsetRangeRequestBuilder
     */
    public offsetRange(rowOffset: number | undefined, columnOffset: number | undefined) : OffsetRangeRequestBuilder {
        if(!columnOffset) throw new Error("columnOffset cannot be undefined");
        if(!rowOffset) throw new Error("rowOffset cannot be undefined");
        return new OffsetRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, rowOffset, columnOffset);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.resizedRange(deltaRows={deltaRows},deltaColumns={deltaColumns})
     * @param deltaColumns Usage: deltaColumns={deltaColumns}
     * @param deltaRows Usage: deltaRows={deltaRows}
     * @returns a resizedRangeRequestBuilder
     */
    public resizedRange(deltaRows: number | undefined, deltaColumns: number | undefined) : ResizedRangeRequestBuilder {
        if(!deltaColumns) throw new Error("deltaColumns cannot be undefined");
        if(!deltaRows) throw new Error("deltaRows cannot be undefined");
        return new ResizedRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, deltaRows, deltaColumns);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.row(row={row})
     * @param row Usage: row={row}
     * @returns a rowRequestBuilder
     */
    public row(row: number | undefined) : RowRequestBuilder {
        if(!row) throw new Error("row cannot be undefined");
        return new RowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false, row);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsAbove()
     * @returns a rowsAboveRequestBuilder
     */
    public rowsAbove() : RowsAboveRequestBuilder {
        return new RowsAboveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsBelow()
     * @returns a rowsBelowRequestBuilder
     */
    public rowsBelow() : RowsBelowRequestBuilder {
        return new RowsBelowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /me/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.visibleView()
     * @returns a visibleViewRequestBuilder
     */
    public visibleView() : VisibleViewRequestBuilder {
        return new VisibleViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
}
