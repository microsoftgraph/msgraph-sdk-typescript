import {CellWithRowWithColumnRequestBuilder} from '../../../../../workbooks/workbook/names/worksheet/cellWithRowWithColumn/cellWithRowWithColumnRequestBuilder';
import {UsedRangeRequestBuilder} from '../../../../../workbooks/workbook/names/worksheet/charts/worksheet/usedRange/usedRangeRequestBuilder';
import {UsedRangeWithValuesOnlyRequestBuilder} from '../../../../../workbooks/workbook/names/worksheet/charts/worksheet/usedRangeWithValuesOnly/usedRangeWithValuesOnlyRequestBuilder';
import {BoundingRectWithAnotherRangeRequestBuilder} from './boundingRectWithAnotherRange/boundingRectWithAnotherRangeRequestBuilder';
import {ClearRequestBuilder} from './clear/clearRequestBuilder';
import {ColumnsAfterRequestBuilder} from './columnsAfter/columnsAfterRequestBuilder';
import {ColumnsAfterWithCountRequestBuilder} from './columnsAfterWithCount/columnsAfterWithCountRequestBuilder';
import {ColumnsBeforeRequestBuilder} from './columnsBefore/columnsBeforeRequestBuilder';
import {ColumnsBeforeWithCountRequestBuilder} from './columnsBeforeWithCount/columnsBeforeWithCountRequestBuilder';
import {ColumnWithColumnRequestBuilder} from './columnWithColumn/columnWithColumnRequestBuilder';
import {DeleteRequestBuilder} from './delete/deleteRequestBuilder';
import {EntireColumnRequestBuilder} from './entireColumn/entireColumnRequestBuilder';
import {EntireRowRequestBuilder} from './entireRow/entireRowRequestBuilder';
import {InsertRequestBuilder} from './insert/insertRequestBuilder';
import {IntersectionWithAnotherRangeRequestBuilder} from './intersectionWithAnotherRange/intersectionWithAnotherRangeRequestBuilder';
import {LastCellRequestBuilder} from './lastCell/lastCellRequestBuilder';
import {LastColumnRequestBuilder} from './lastColumn/lastColumnRequestBuilder';
import {LastRowRequestBuilder} from './lastRow/lastRowRequestBuilder';
import {MergeRequestBuilder} from './merge/mergeRequestBuilder';
import {OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder} from './offsetRangeWithRowOffsetWithColumnOffset/offsetRangeWithRowOffsetWithColumnOffsetRequestBuilder';
import {ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder} from './resizedRangeWithDeltaRowsWithDeltaColumns/resizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder';
import {RowsAboveRequestBuilder} from './rowsAbove/rowsAboveRequestBuilder';
import {RowsAboveWithCountRequestBuilder} from './rowsAboveWithCount/rowsAboveWithCountRequestBuilder';
import {RowsBelowRequestBuilder} from './rowsBelow/rowsBelowRequestBuilder';
import {RowsBelowWithCountRequestBuilder} from './rowsBelowWithCount/rowsBelowWithCountRequestBuilder';
import {RowWithRowRequestBuilder} from './rowWithRow/rowWithRowRequestBuilder';
import {UnmergeRequestBuilder} from './unmerge/unmergeRequestBuilder';
import {VisibleViewRequestBuilder} from './visibleView/visibleViewRequestBuilder';
import {HttpCore, HttpMethod, RequestInformation, ResponseHandler, MiddlewareOption} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange  */
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
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.boundingRect(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a boundingRectWithAnotherRangeRequestBuilder
     */
    public boundingRectWithAnotherRange(anotherRange: string | undefined) : BoundingRectWithAnotherRangeRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new BoundingRectWithAnotherRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, anotherRange, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.cell(row={row},column={column})
     * @param column Usage: column={column}
     * @param row Usage: row={row}
     * @returns a cellWithRowWithColumnRequestBuilder
     */
    public cellWithRowWithColumn(row: number | undefined, column: number | undefined) : CellWithRowWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        if(!row) throw new Error("row cannot be undefined");
        return new CellWithRowWithColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, row, column, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsAfter()
     * @returns a columnsAfterRequestBuilder
     */
    public columnsAfter() : ColumnsAfterRequestBuilder {
        return new ColumnsAfterRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsAfter(count={count})
     * @param count Usage: count={count}
     * @returns a columnsAfterWithCountRequestBuilder
     */
    public columnsAfterWithCount(count: number | undefined) : ColumnsAfterWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new ColumnsAfterWithCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, count, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsBefore()
     * @returns a columnsBeforeRequestBuilder
     */
    public columnsBefore() : ColumnsBeforeRequestBuilder {
        return new ColumnsBeforeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.columnsBefore(count={count})
     * @param count Usage: count={count}
     * @returns a columnsBeforeWithCountRequestBuilder
     */
    public columnsBeforeWithCount(count: number | undefined) : ColumnsBeforeWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new ColumnsBeforeWithCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, count, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.column(column={column})
     * @param column Usage: column={column}
     * @returns a columnWithColumnRequestBuilder
     */
    public columnWithColumn(column: number | undefined) : ColumnWithColumnRequestBuilder {
        if(!column) throw new Error("column cannot be undefined");
        return new ColumnWithColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, column, false);
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
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.entireColumn()
     * @returns a entireColumnRequestBuilder
     */
    public entireColumn() : EntireColumnRequestBuilder {
        return new EntireColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.entireRow()
     * @returns a entireRowRequestBuilder
     */
    public entireRow() : EntireRowRequestBuilder {
        return new EntireRowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.intersection(anotherRange='{anotherRange}')
     * @param anotherRange Usage: anotherRange={anotherRange}
     * @returns a intersectionWithAnotherRangeRequestBuilder
     */
    public intersectionWithAnotherRange(anotherRange: string | undefined) : IntersectionWithAnotherRangeRequestBuilder {
        if(!anotherRange) throw new Error("anotherRange cannot be undefined");
        return new IntersectionWithAnotherRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, anotherRange, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastCell()
     * @returns a lastCellRequestBuilder
     */
    public lastCell() : LastCellRequestBuilder {
        return new LastCellRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastColumn()
     * @returns a lastColumnRequestBuilder
     */
    public lastColumn() : LastColumnRequestBuilder {
        return new LastColumnRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.lastRow()
     * @returns a lastRowRequestBuilder
     */
    public lastRow() : LastRowRequestBuilder {
        return new LastRowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.offsetRange(rowOffset={rowOffset},columnOffset={columnOffset})
     * @param columnOffset Usage: columnOffset={columnOffset}
     * @param rowOffset Usage: rowOffset={rowOffset}
     * @returns a offsetRangeWithRowOffsetWithColumnOffsetRequestBuilder
     */
    public offsetRangeWithRowOffsetWithColumnOffset(rowOffset: number | undefined, columnOffset: number | undefined) : OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder {
        if(!columnOffset) throw new Error("columnOffset cannot be undefined");
        if(!rowOffset) throw new Error("rowOffset cannot be undefined");
        return new OffsetRangeWithRowOffsetWithColumnOffsetRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, rowOffset, columnOffset, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.resizedRange(deltaRows={deltaRows},deltaColumns={deltaColumns})
     * @param deltaColumns Usage: deltaColumns={deltaColumns}
     * @param deltaRows Usage: deltaRows={deltaRows}
     * @returns a resizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder
     */
    public resizedRangeWithDeltaRowsWithDeltaColumns(deltaRows: number | undefined, deltaColumns: number | undefined) : ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder {
        if(!deltaColumns) throw new Error("deltaColumns cannot be undefined");
        if(!deltaRows) throw new Error("deltaRows cannot be undefined");
        return new ResizedRangeWithDeltaRowsWithDeltaColumnsRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, deltaRows, deltaColumns, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsAbove()
     * @returns a rowsAboveRequestBuilder
     */
    public rowsAbove() : RowsAboveRequestBuilder {
        return new RowsAboveRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsAbove(count={count})
     * @param count Usage: count={count}
     * @returns a rowsAboveWithCountRequestBuilder
     */
    public rowsAboveWithCount(count: number | undefined) : RowsAboveWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new RowsAboveWithCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, count, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsBelow()
     * @returns a rowsBelowRequestBuilder
     */
    public rowsBelow() : RowsBelowRequestBuilder {
        return new RowsBelowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.rowsBelow(count={count})
     * @param count Usage: count={count}
     * @returns a rowsBelowWithCountRequestBuilder
     */
    public rowsBelowWithCount(count: number | undefined) : RowsBelowWithCountRequestBuilder {
        if(!count) throw new Error("count cannot be undefined");
        return new RowsBelowWithCountRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, count, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.row(row={row})
     * @param row Usage: row={row}
     * @returns a rowWithRowRequestBuilder
     */
    public rowWithRow(row: number | undefined) : RowWithRowRequestBuilder {
        if(!row) throw new Error("row cannot be undefined");
        return new RowWithRowRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, row, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.usedRange()
     * @returns a usedRangeRequestBuilder
     */
    public usedRange() : UsedRangeRequestBuilder {
        return new UsedRangeRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.usedRange(valuesOnly={valuesOnly})
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     * @returns a usedRangeWithValuesOnlyRequestBuilder
     */
    public usedRangeWithValuesOnly(valuesOnly: boolean | undefined) : UsedRangeWithValuesOnlyRequestBuilder {
        if(!valuesOnly) throw new Error("valuesOnly cannot be undefined");
        return new UsedRangeWithValuesOnlyRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, valuesOnly, false);
    };
    /**
     * Builds and executes requests for operations under /users/{user-id}/insights/trending/{trending-id}/resource/microsoft.graph.workbookRange/microsoft.graph.visibleView()
     * @returns a visibleViewRequestBuilder
     */
    public visibleView() : VisibleViewRequestBuilder {
        return new VisibleViewRequestBuilder(this.currentPath + this.pathSegment, this.httpCore, false);
    };
}
