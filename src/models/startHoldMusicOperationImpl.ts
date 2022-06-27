import {CommsOperationImpl} from './index';
import {StartHoldMusicOperation} from './startHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StartHoldMusicOperationImpl extends CommsOperationImpl implements StartHoldMusicOperation {
    /**
     * Instantiates a new StartHoldMusicOperation and sets the default values.
     * @param startHoldMusicOperationParameterValue 
     */
    public constructor(startHoldMusicOperationParameterValue?: StartHoldMusicOperation | undefined) {
        super(startHoldMusicOperationParameterValue);
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
