import {ConnectedOrganizationMembers} from './connectedOrganizationMembers';
import {SubjectSetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectedOrganizationMembersImpl extends SubjectSetImpl implements ConnectedOrganizationMembers {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The ID of the connected organization in entitlement management. */
    public connectedOrganizationId?: string | undefined;
    /** The name of the connected organization. Read only. */
    public description?: string | undefined;
    /**
     * Instantiates a new ConnectedOrganizationMembers and sets the default values.
     * @param connectedOrganizationMembersParameterValue 
     */
    public constructor(connectedOrganizationMembersParameterValue?: ConnectedOrganizationMembers | undefined) {
        super(connectedOrganizationMembersParameterValue);
        this.additionalData = connectedOrganizationMembersParameterValue?.additionalData ? connectedOrganizationMembersParameterValue?.additionalData! : {};
        this.connectedOrganizationId = connectedOrganizationMembersParameterValue?.connectedOrganizationId;
        this.description = connectedOrganizationMembersParameterValue?.description;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "connectedOrganizationId": n => { this.connectedOrganizationId = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.connectedOrganizationId){
            writer.writeStringValue("connectedOrganizationId", this.connectedOrganizationId);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
