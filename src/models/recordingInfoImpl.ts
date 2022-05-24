import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl} from './index';
import {RecordingInfo} from './recordingInfo';
import {RecordingStatus} from './recordingStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordingInfoImpl implements AdditionalDataHolder, Parsable, RecordingInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The identities of recording initiator. */
    public initiator?: IdentitySet | undefined;
    /** Possible values are: unknown, notRecording, recording, or failed. */
    public recordingStatus?: RecordingStatus | undefined;
    /**
     * Instantiates a new recordingInfo and sets the default values.
     * @param recordingInfoParameterValue 
     */
    public constructor(recordingInfoParameterValue?: RecordingInfo | undefined) {
        this.additionalData = recordingInfoParameterValue?.additionalData ? recordingInfoParameterValue?.additionalData! : {}
        this.initiator = recordingInfoParameterValue?.initiator ;
        this.recordingStatus = recordingInfoParameterValue?.recordingStatus ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "recordingStatus": n => { this.recordingStatus = n.getEnumValue<RecordingStatus>(RecordingStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.initiator){
        writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        if(this.recordingStatus){
        writer.writeEnumValue<RecordingStatus>("recordingStatus", this.recordingStatus);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
