import {RolePermissionImpl} from '../../models/';
import {createRolePermissionFromDiscriminatorValue} from '../../models/createRolePermissionFromDiscriminatorValue';
import {RolePermission} from '../../models/rolePermission';
import {GetEffectivePermissionsWithScopeResponse} from './getEffectivePermissionsWithScopeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getEffectivePermissions method. */
export class GetEffectivePermissionsWithScopeResponseImpl implements AdditionalDataHolder, GetEffectivePermissionsWithScopeResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: RolePermission[] | undefined;
    /**
     * Instantiates a new getEffectivePermissionsWithScopeResponse and sets the default values.
     * @param getEffectivePermissionsWithScopeResponseParameterValue 
     */
    public constructor(getEffectivePermissionsWithScopeResponseParameterValue?: GetEffectivePermissionsWithScopeResponse | undefined) {
        this.additionalData = getEffectivePermissionsWithScopeResponseParameterValue?.additionalData ? getEffectivePermissionsWithScopeResponseParameterValue?.additionalData! : {}
        this.value = getEffectivePermissionsWithScopeResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<RolePermissionImpl>(createRolePermissionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: RolePermissionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RolePermissionImpl(element));});
        writer.writeCollectionOfObjectValues<RolePermissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
