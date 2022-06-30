import {createWorkbookFilterCriteriaFromDiscriminatorValue} from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import {EntityImpl, WorkbookFilterCriteriaImpl} from './index';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class WorkbookFilterImpl extends EntityImpl implements WorkbookFilter {
    /** The currently applied filter on the given column. Read-only. */
    private _criteria?: WorkbookFilterCriteria | undefined;
    /**
     * Instantiates a new workbookFilter and sets the default values.
     * @param workbookFilterParameterValue 
     */
    public constructor(workbookFilterParameterValue?: WorkbookFilter | undefined) {
        super(workbookFilterParameterValue);
        this._criteria = workbookFilterParameterValue?.criteria;
    };
    /**
     * Gets the criteria property value. The currently applied filter on the given column. Read-only.
     * @returns a WorkbookFilterCriteriaInterface
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The currently applied filter on the given column. Read-only.
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: WorkbookFilterCriteria | undefined) {
        if(value) {
            this._criteria = value instanceof WorkbookFilterCriteriaImpl? value : new WorkbookFilterCriteriaImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "criteria": n => { this.criteria = n.getObjectValue<WorkbookFilterCriteriaImpl>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.criteria){
            writer.writeObjectValue<WorkbookFilterCriteriaImpl>("criteria", (!this.criteria || this.criteria instanceof WorkbookFilterCriteriaImpl? this.criteria : new WorkbookFilterCriteriaImpl(this.criteria)));
        }
    };
}
