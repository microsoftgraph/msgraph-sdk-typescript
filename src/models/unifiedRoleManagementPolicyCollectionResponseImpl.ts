import {createUnifiedRoleManagementPolicyFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyFromDiscriminatorValue';
import {UnifiedRoleManagementPolicyImpl} from './index';
import {UnifiedRoleManagementPolicy} from './unifiedRoleManagementPolicy';
import {UnifiedRoleManagementPolicyCollectionResponse} from './unifiedRoleManagementPolicyCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleManagementPolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleManagementPolicy[] | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyCollectionResponse and sets the default values.
     * @param unifiedRoleManagementPolicyCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyCollectionResponseParameterValue?: UnifiedRoleManagementPolicyCollectionResponse | undefined) {
        this.additionalData = unifiedRoleManagementPolicyCollectionResponseParameterValue?.additionalData ? unifiedRoleManagementPolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleManagementPolicyCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleManagementPolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyImpl>(createUnifiedRoleManagementPolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleManagementPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleManagementPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
