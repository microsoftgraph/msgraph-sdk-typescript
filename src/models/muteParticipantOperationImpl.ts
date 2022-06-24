import {CommsOperationImpl} from './index';
import {MuteParticipantOperation} from './muteParticipantOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MuteParticipantOperationImpl extends CommsOperationImpl implements MuteParticipantOperation {
    /**
     * Instantiates a new MuteParticipantOperation and sets the default values.
     * @param muteParticipantOperationParameterValue 
     */
    public constructor(muteParticipantOperationParameterValue?: MuteParticipantOperation | undefined) {
        super(muteParticipantOperationParameterValue);
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
