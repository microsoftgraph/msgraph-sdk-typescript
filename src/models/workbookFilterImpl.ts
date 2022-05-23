import {createWorkbookFilterCriteriaFromDiscriminatorValue} from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import {EntityImpl, WorkbookFilterCriteriaImpl} from './index';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookFilterImpl extends EntityImpl implements Parsable, WorkbookFilter {
    /** The currently applied filter on the given column. Read-only. */
    public criteria?: WorkbookFilterCriteria | undefined;
    /**
     * Instantiates a new workbookFilter and sets the default values.
     * @param workbookFilterParameterValue 
     */
    public constructor(workbookFilterParameterValue?: WorkbookFilter | undefined) {
        super();
        this.criteria = workbookFilterParameterValue?.criteria ;
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
        writer.writeObjectValue<WorkbookFilterCriteriaImpl>("criteria", new WorkbookFilterCriteriaImpl(this.criteria));
        }
    };
}
