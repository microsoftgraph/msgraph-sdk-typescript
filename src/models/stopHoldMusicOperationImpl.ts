import {CommsOperationImpl} from './index';
import {StopHoldMusicOperation} from './stopHoldMusicOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the stopHoldMusic method. */
export class StopHoldMusicOperationImpl extends CommsOperationImpl implements Parsable, StopHoldMusicOperation {
    /**
     * Instantiates a new stopHoldMusicOperation and sets the default values.
     * @param stopHoldMusicOperationParameterValue 
     */
    public constructor(stopHoldMusicOperationParameterValue?: StopHoldMusicOperation | undefined) {
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
