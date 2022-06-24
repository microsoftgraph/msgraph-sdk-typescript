import {AssociatedTeamInfo} from './associatedTeamInfo';
import {TeamInfoImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssociatedTeamInfoImpl extends TeamInfoImpl implements AssociatedTeamInfo {
    /**
     * Instantiates a new AssociatedTeamInfo and sets the default values.
     * @param associatedTeamInfoParameterValue 
     */
    public constructor(associatedTeamInfoParameterValue?: AssociatedTeamInfo | undefined) {
        super(associatedTeamInfoParameterValue);
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
