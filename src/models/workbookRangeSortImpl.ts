import {EntityImpl} from './index';
import {WorkbookRangeSort} from './workbookRangeSort';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookRangeSortImpl extends EntityImpl implements WorkbookRangeSort {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new workbookRangeSort and sets the default values.
     * @param workbookRangeSortParameterValue 
     */
    public constructor(workbookRangeSortParameterValue?: WorkbookRangeSort | undefined) {
        super(workbookRangeSortParameterValue);
        this.additionalData = workbookRangeSortParameterValue?.additionalData ? workbookRangeSortParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
