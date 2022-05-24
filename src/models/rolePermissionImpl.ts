import {createResourceActionFromDiscriminatorValue} from './createResourceActionFromDiscriminatorValue';
import {ResourceActionImpl} from './index';
import {ResourceAction} from './resourceAction';
import {RolePermission} from './rolePermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains the set of ResourceActions determining the allowed and not allowed permissions for each role. */
export class RolePermissionImpl implements AdditionalDataHolder, Parsable, RolePermission {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Resource Actions each containing a set of allowed and not allowed permissions. */
    public resourceActions?: ResourceAction[] | undefined;
    /**
     * Instantiates a new rolePermission and sets the default values.
     * @param rolePermissionParameterValue 
     */
    public constructor(rolePermissionParameterValue?: RolePermission | undefined) {
        this.additionalData = rolePermissionParameterValue?.additionalData ? rolePermissionParameterValue?.additionalData! : {}
        this.resourceActions = rolePermissionParameterValue?.resourceActions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "resourceActions": n => { this.resourceActions = n.getCollectionOfObjectValues<ResourceActionImpl>(createResourceActionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resourceActions && this.resourceActions.length != 0){        const resourceActionsArrValue: ResourceActionImpl[] = []; this.resourceActions?.forEach(element => {resourceActionsArrValue.push(new ResourceActionImpl(element));});
        writer.writeCollectionOfObjectValues<ResourceActionImpl>("resourceActions", resourceActionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
