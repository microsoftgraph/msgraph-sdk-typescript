import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {TeamworkHostedContentImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ChatMessageHostedContentImpl extends TeamworkHostedContentImpl implements ChatMessageHostedContent, Parsable {
    /**
     * Instantiates a new chatMessageHostedContent and sets the default values.
     * @param chatMessageHostedContentParameterValue 
     */
    public constructor(chatMessageHostedContentParameterValue?: ChatMessageHostedContent | undefined) {
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
