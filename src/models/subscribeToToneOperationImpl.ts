import {CommsOperationImpl} from './index';
import {SubscribeToToneOperation} from './subscribeToToneOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the subscribeToTone method. */
export class SubscribeToToneOperationImpl extends CommsOperationImpl implements Parsable, SubscribeToToneOperation {
    /**
     * Instantiates a new subscribeToToneOperation and sets the default values.
     * @param subscribeToToneOperationParameterValue 
     */
    public constructor(subscribeToToneOperationParameterValue?: SubscribeToToneOperation | undefined) {
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
