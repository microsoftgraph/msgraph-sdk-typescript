import {RecordingStatus} from '../../../../models/recordingStatus';
import {UpdateRecordingStatusRequestBody} from './updateRecordingStatusRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateRecordingStatus method. */
export class UpdateRecordingStatusRequestBodyImpl implements AdditionalDataHolder, Parsable, UpdateRecordingStatusRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The clientContext property */
    clientContext?: string | undefined;
    /** The status property */
    status?: RecordingStatus | undefined;
    /**
     * Instantiates a new updateRecordingStatusRequestBody and sets the default values.
     * @param updateRecordingStatusRequestBodyParameterValue 
     */
    public constructor(updateRecordingStatusRequestBodyParameterValue?: UpdateRecordingStatusRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = updateRecordingStatusRequestBodyParameterValue?.additionalData ? {} : updateRecordingStatusRequestBodyParameterValue?.additionalData!
        this.clientContext = updateRecordingStatusRequestBodyParameterValue?.clientContext ;
        this.status = updateRecordingStatusRequestBodyParameterValue?.status ;
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
        if(this.clientContext)
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.status){
        if(this.status)
        writer.writeEnumValue<RecordingStatus>("status", this.status);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
