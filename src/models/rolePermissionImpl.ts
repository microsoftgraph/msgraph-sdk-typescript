import {createResourceActionFromDiscriminatorValue} from './createResourceActionFromDiscriminatorValue';
import {ResourceActionImpl} from './index';
import {ResourceAction} from './resourceAction';
import {RolePermission} from './rolePermission';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains the set of ResourceActions determining the allowed and not allowed permissions for each role. */
export class RolePermissionImpl implements RolePermission {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Resource Actions each containing a set of allowed and not allowed permissions. */
    private _resourceActions?: ResourceAction[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new rolePermission and sets the default values.
     * @param rolePermissionParameterValue 
     */
    public constructor(rolePermissionParameterValue?: RolePermission | undefined) {
        this._additionalData = rolePermissionParameterValue?.additionalData ? rolePermissionParameterValue?.additionalData! : {};
        this._resourceActions = rolePermissionParameterValue?.resourceActions;
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
     * Gets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @returns a ResourceActionInterface
     */
    public get resourceActions() {
        return this._resourceActions;
    };
    /**
     * Sets the resourceActions property value. Resource Actions each containing a set of allowed and not allowed permissions.
     * @param value Value to set for the resourceActions property.
     */
    public set resourceActions(value: ResourceAction[] | undefined) {
        if(value) {
            const resourceActionsArrValue: ResourceActionImpl[] = [];
            this.resourceActions?.forEach(element => {
                resourceActionsArrValue.push((element instanceof ResourceActionImpl? element:new ResourceActionImpl(element)));
            });
            this._resourceActions = resourceActionsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.resourceActions && this.resourceActions.length != 0){        const resourceActionsArrValue: ResourceActionImpl[] = [];
        this.resourceActions?.forEach(element => {
            resourceActionsArrValue.push((element instanceof ResourceActionImpl? element:new ResourceActionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ResourceActionImpl>("resourceActions", resourceActionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
