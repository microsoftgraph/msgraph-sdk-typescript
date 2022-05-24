import {createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue';
import {UnifiedRoleManagementPolicyRuleImpl} from './index';
import {UnifiedRoleManagementPolicyRule} from './unifiedRoleManagementPolicyRule';
import {UnifiedRoleManagementPolicyRuleCollectionResponse} from './unifiedRoleManagementPolicyRuleCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyRuleCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleManagementPolicyRuleCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleManagementPolicyRule[] | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyRuleCollectionResponse and sets the default values.
     * @param unifiedRoleManagementPolicyRuleCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyRuleCollectionResponseParameterValue?: UnifiedRoleManagementPolicyRuleCollectionResponse | undefined) {
        this.additionalData = unifiedRoleManagementPolicyRuleCollectionResponseParameterValue?.additionalData ? unifiedRoleManagementPolicyRuleCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleManagementPolicyRuleCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleManagementPolicyRuleCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>(createUnifiedRoleManagementPolicyRuleFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleManagementPolicyRuleImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleManagementPolicyRuleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyRuleImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
