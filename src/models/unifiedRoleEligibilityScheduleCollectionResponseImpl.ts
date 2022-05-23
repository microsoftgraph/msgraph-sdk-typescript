import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from './createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {UnifiedRoleEligibilityScheduleImpl} from './index';
import {UnifiedRoleEligibilitySchedule} from './unifiedRoleEligibilitySchedule';
import {UnifiedRoleEligibilityScheduleCollectionResponse} from './unifiedRoleEligibilityScheduleCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnifiedRoleEligibilityScheduleCollectionResponseImpl implements AdditionalDataHolder, Parsable, UnifiedRoleEligibilityScheduleCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UnifiedRoleEligibilitySchedule[] | undefined;
    /**
     * Instantiates a new UnifiedRoleEligibilityScheduleCollectionResponse and sets the default values.
     * @param unifiedRoleEligibilityScheduleCollectionResponseParameterValue 
     */
    public constructor(unifiedRoleEligibilityScheduleCollectionResponseParameterValue?: UnifiedRoleEligibilityScheduleCollectionResponse | undefined) {
        this.additionalData = unifiedRoleEligibilityScheduleCollectionResponseParameterValue?.additionalData ? unifiedRoleEligibilityScheduleCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = unifiedRoleEligibilityScheduleCollectionResponseParameterValue?.nextLink ;
        this.value = unifiedRoleEligibilityScheduleCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UnifiedRoleEligibilityScheduleImpl>(createUnifiedRoleEligibilityScheduleFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UnifiedRoleEligibilityScheduleImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UnifiedRoleEligibilityScheduleImpl(element));});
        writer.writeCollectionOfObjectValues<UnifiedRoleEligibilityScheduleImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
