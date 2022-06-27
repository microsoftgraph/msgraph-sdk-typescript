import {ScheduleChangeRequestImpl} from './index';
import {OpenShiftChangeRequest} from './openShiftChangeRequest';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenShiftChangeRequestImpl extends ScheduleChangeRequestImpl implements OpenShiftChangeRequest {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** ID for the open shift. */
    public openShiftId?: string | undefined;
    /**
     * Instantiates a new OpenShiftChangeRequest and sets the default values.
     * @param openShiftChangeRequestParameterValue 
     */
    public constructor(openShiftChangeRequestParameterValue?: OpenShiftChangeRequest | undefined) {
        super(openShiftChangeRequestParameterValue);
        this.additionalData = openShiftChangeRequestParameterValue?.additionalData ? openShiftChangeRequestParameterValue?.additionalData! : {};
        this.openShiftId = openShiftChangeRequestParameterValue?.openShiftId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "openShiftId": n => { this.openShiftId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.openShiftId){
            writer.writeStringValue("openShiftId", this.openShiftId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
