import {CommsOperationImpl} from './index';
import {UpdateRecordingStatusOperation} from './updateRecordingStatusOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the updateRecordingStatus method. */
export class UpdateRecordingStatusOperationImpl extends CommsOperationImpl implements Parsable, UpdateRecordingStatusOperation {
    /**
     * Instantiates a new updateRecordingStatusOperation and sets the default values.
     * @param updateRecordingStatusOperationParameterValue 
     */
    public constructor(updateRecordingStatusOperationParameterValue?: UpdateRecordingStatusOperation | undefined) {
        super();
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
    };
}
