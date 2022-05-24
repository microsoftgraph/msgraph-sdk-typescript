import {CommsOperationImpl} from './index';
import {UnmuteParticipantOperation} from './unmuteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the unmute method. */
export class UnmuteParticipantOperationImpl extends CommsOperationImpl implements Parsable, UnmuteParticipantOperation {
    /**
     * Instantiates a new unmuteParticipantOperation and sets the default values.
     * @param unmuteParticipantOperationParameterValue 
     */
    public constructor(unmuteParticipantOperationParameterValue?: UnmuteParticipantOperation | undefined) {
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
