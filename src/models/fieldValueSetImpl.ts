import {FieldValueSet} from './fieldValueSet';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class FieldValueSetImpl extends EntityImpl implements FieldValueSet, Parsable {
    /**
     * Instantiates a new fieldValueSet and sets the default values.
     * @param fieldValueSetParameterValue 
     */
    public constructor(fieldValueSetParameterValue?: FieldValueSet | undefined) {
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
