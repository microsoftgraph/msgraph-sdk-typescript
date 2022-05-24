import {createUnifiedRoleAssignmentScheduleFromDiscriminatorValue} from './createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import {UnifiedRoleAssignmentScheduleImpl} from './index';
import {UnifiedRoleAssignmentSchedule} from './unifiedRoleAssignmentSchedule';
import {UnifiedRoleAssignmentScheduleCollectionResponse} from './unifiedRoleAssignmentScheduleCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleAssignmentScheduleCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleAssignmentScheduleCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleAssignmentSchedule[] | undefined;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleCollectionResponse and sets the default values.
     * @param unifiedRoleAssignmentScheduleCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleAssignmentScheduleCollectionResponseParameterValue?: UnifiedRoleAssignmentScheduleCollectionResponse | undefined) {
        this.additionalData = unifiedRoleAssignmentScheduleCollectionResponseParameterValue?.additionalData ? unifiedRoleAssignmentScheduleCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleAssignmentScheduleCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleAssignmentScheduleCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleAssignmentScheduleImpl>(createUnifiedRoleAssignmentScheduleFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleAssignmentScheduleImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleAssignmentScheduleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleAssignmentScheduleImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
