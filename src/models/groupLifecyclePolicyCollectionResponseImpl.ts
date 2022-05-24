import {createGroupLifecyclePolicyFromDiscriminatorValue} from './createGroupLifecyclePolicyFromDiscriminatorValue';
import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {GroupLifecyclePolicyCollectionResponse} from './groupLifecyclePolicyCollectionResponse';
import {GroupLifecyclePolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupLifecyclePolicyCollectionResponseImpl implements AdditionalDataHolder, GroupLifecyclePolicyCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: GroupLifecyclePolicy[] | undefined;
    /**
     * Instantiates a new GroupLifecyclePolicyCollectionResponse and sets the default values.
     * @param groupLifecyclePolicyCollectionResponseParameterValue 
     */
    public constructor(groupLifecyclePolicyCollectionResponseParameterValue?: GroupLifecyclePolicyCollectionResponse | undefined) {
        this.additionalData = groupLifecyclePolicyCollectionResponseParameterValue?.additionalData ? groupLifecyclePolicyCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = groupLifecyclePolicyCollectionResponseParameterValue?.nextLink ;
        this.value = groupLifecyclePolicyCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<GroupLifecyclePolicyImpl>(createGroupLifecyclePolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: GroupLifecyclePolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new GroupLifecyclePolicyImpl(element));});
        writer.writeCollectionOfObjectValues<GroupLifecyclePolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
