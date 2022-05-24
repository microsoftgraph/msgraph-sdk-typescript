import {CommsOperationImpl} from './index';
import {PlayPromptOperation} from './playPromptOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the playPrompt method. */
export class PlayPromptOperationImpl extends CommsOperationImpl implements Parsable, PlayPromptOperation {
    /**
     * Instantiates a new playPromptOperation and sets the default values.
     * @param playPromptOperationParameterValue 
     */
    public constructor(playPromptOperationParameterValue?: PlayPromptOperation | undefined) {
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
