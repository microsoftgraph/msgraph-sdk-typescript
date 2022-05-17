import {EntityImpl} from './index';
import {SearchEntity} from './searchEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the searchEntity singleton. */
export class SearchEntityImpl extends EntityImpl implements Parsable, SearchEntity {
    /**
     * Instantiates a new searchEntity and sets the default values.
     * @param searchEntityParameterValue 
     */
    public constructor(searchEntityParameterValue?: SearchEntity | undefined) {
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
