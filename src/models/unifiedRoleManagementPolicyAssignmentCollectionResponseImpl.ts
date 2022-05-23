import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from './createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {UnifiedRoleManagementPolicyAssignmentImpl} from './index';
import {UnifiedRoleManagementPolicyAssignment} from './unifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from './unifiedRoleManagementPolicyAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleManagementPolicyAssignmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleManagementPolicyAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleManagementPolicyAssignment[] | undefined;
    /**
     * Instantiates a new UnifiedRoleManagementPolicyAssignmentCollectionResponse and sets the default values.
     * @param unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue?: UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined) {
        this.additionalData = unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue?.additionalData ? unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleManagementPolicyAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignmentImpl>(createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleManagementPolicyAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleManagementPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleManagementPolicyAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
