import {ChatMessageReactionIdentitySet} from './chatMessageReactionIdentitySet';
import {IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ChatMessageReactionIdentitySetImpl extends IdentitySetImpl implements ChatMessageReactionIdentitySet, Parsable {
    /**
     * Instantiates a new chatMessageReactionIdentitySet and sets the default values.
     * @param chatMessageReactionIdentitySetParameterValue 
     */
    public constructor(chatMessageReactionIdentitySetParameterValue?: ChatMessageReactionIdentitySet | undefined) {
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
