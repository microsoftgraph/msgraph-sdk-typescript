import {EntityImpl} from './index';
import {TeamsTemplate} from './teamsTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TeamsTemplateImpl extends EntityImpl implements Parsable, TeamsTemplate {
    /**
     * Instantiates a new teamsTemplate and sets the default values.
     * @param teamsTemplateParameterValue 
     */
    public constructor(teamsTemplateParameterValue?: TeamsTemplate | undefined) {
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
