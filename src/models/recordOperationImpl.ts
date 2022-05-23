import {CommsOperationImpl} from './index';
import {RecordOperation} from './recordOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the recordResponse method. */
export class RecordOperationImpl extends CommsOperationImpl implements Parsable, RecordOperation {
    /** The access token required to retrieve the recording. */
    public recordingAccessToken?: string | undefined;
    /** The location where the recording is located. */
    public recordingLocation?: string | undefined;
    /**
     * Instantiates a new recordOperation and sets the default values.
     * @param recordOperationParameterValue 
     */
    public constructor(recordOperationParameterValue?: RecordOperation | undefined) {
        super();
        this.recordingAccessToken = recordOperationParameterValue?.recordingAccessToken ;
        this.recordingLocation = recordOperationParameterValue?.recordingLocation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "recordingAccessToken": n => { this.recordingAccessToken = n.getStringValue(); },
            "recordingLocation": n => { this.recordingLocation = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.recordingAccessToken){
        writer.writeStringValue("recordingAccessToken", this.recordingAccessToken);
        }
        if(this.recordingLocation){
        writer.writeStringValue("recordingLocation", this.recordingLocation);
        }
    };
}
