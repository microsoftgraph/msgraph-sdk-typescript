import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {UnifiedRoleAssignmentScheduleRequestImpl} from './index';
import {UnifiedRoleAssignmentScheduleRequest} from './unifiedRoleAssignmentScheduleRequest';
import {UnifiedRoleAssignmentScheduleRequestCollectionResponse} from './unifiedRoleAssignmentScheduleRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleRequestCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleAssignmentScheduleRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleAssignmentScheduleRequest[] | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleRequestCollectionResponse and sets the default values.
     * @param unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue?: UnifiedRoleAssignmentScheduleRequestCollectionResponse | undefined) {
        this.additionalData = unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue?.additionalData ? unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleAssignmentScheduleRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequestImpl>(createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleAssignmentScheduleRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleAssignmentScheduleRequestImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
