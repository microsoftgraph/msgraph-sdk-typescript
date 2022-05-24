import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusPostRequestBody} from './updateRecordingStatusPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateRecordingStatus method. */
export class UpdateRecordingStatusPostRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateRecordingStatusPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The clientContext property */
    public clientContext?: string | undefined;
    /** The status property */
    public status?: RecordingStatus | undefined;
    /**
     * Instantiates a new updateRecordingStatusPostRequestBody and sets the default values.
     * @param updateRecordingStatusPostRequestBodyParameterValue 
     */
    public constructor(updateRecordingStatusPostRequestBodyParameterValue?: UpdateRecordingStatusPostRequestBody | undefined) {
        this.additionalData = updateRecordingStatusPostRequestBodyParameterValue?.additionalData ? updateRecordingStatusPostRequestBodyParameterValue?.additionalData! : {}
        this.clientContext = updateRecordingStatusPostRequestBodyParameterValue?.clientContext ;
        this.status = updateRecordingStatusPostRequestBodyParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<RecordingStatus>(RecordingStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.status){
        writer.writeEnumValue<RecordingStatus>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
