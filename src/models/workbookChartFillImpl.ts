import {EntityImpl} from './index';
import {WorkbookChartFill} from './workbookChartFill';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class WorkbookChartFillImpl extends EntityImpl implements WorkbookChartFill {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new workbookChartFill and sets the default values.
     * @param workbookChartFillParameterValue 
     */
    public constructor(workbookChartFillParameterValue?: WorkbookChartFill | undefined) {
        super(workbookChartFillParameterValue);
        this.additionalData = workbookChartFillParameterValue?.additionalData ? workbookChartFillParameterValue?.additionalData! : {};
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
