import {createWorkbookFilterCriteriaFromDiscriminatorValue} from './createWorkbookFilterCriteriaFromDiscriminatorValue';
import {EntityImpl, WorkbookFilterCriteriaImpl} from './index';
import {WorkbookFilter} from './workbookFilter';
import {WorkbookFilterCriteria} from './workbookFilterCriteria';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookFilterImpl extends EntityImpl implements WorkbookFilter {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The currently applied filter on the given column. Read-only. */
    public criteria?: WorkbookFilterCriteria | undefined;
    /**
     * Instantiates a new workbookFilter and sets the default values.
     * @param workbookFilterParameterValue 
     */
    public constructor(workbookFilterParameterValue?: WorkbookFilter | undefined) {
        super(workbookFilterParameterValue);
        this.additionalData = workbookFilterParameterValue?.additionalData ? workbookFilterParameterValue?.additionalData! : {};
        this.criteria = workbookFilterParameterValue?.criteria instanceof WorkbookFilterCriteriaImpl? workbookFilterParameterValue?.criteria:new WorkbookFilterCriteriaImpl(workbookFilterParameterValue?.criteria);
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
        writer.writeAdditionalData(this.additionalData);
    };
}
