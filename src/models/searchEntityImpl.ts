import {EntityImpl} from './index';
import {SearchEntity} from './searchEntity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchEntityImpl extends EntityImpl implements SearchEntity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new SearchEntity and sets the default values.
     * @param searchEntityParameterValue 
     */
    public constructor(searchEntityParameterValue?: SearchEntity | undefined) {
        super(searchEntityParameterValue);
        this.additionalData = searchEntityParameterValue?.additionalData ? searchEntityParameterValue?.additionalData! : {};
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
        writer.writeAdditionalData(this.additionalData);
    };
}
