import {createUserActivityFromDiscriminatorValue} from './createUserActivityFromDiscriminatorValue';
import {UserActivityImpl} from './index';
import {UserActivity} from './userActivity';
import {UserActivityCollectionResponse} from './userActivityCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserActivityCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserActivityCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserActivity[] | undefined;
    /**
     * Instantiates a new UserActivityCollectionResponse and sets the default values.
     * @param userActivityCollectionResponseParameterValue 
     */
    public constructor(userActivityCollectionResponseParameterValue?: UserActivityCollectionResponse | undefined) {
        this.additionalData = userActivityCollectionResponseParameterValue?.additionalData ? userActivityCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userActivityCollectionResponseParameterValue?.nextLink ;
        this.value = userActivityCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserActivityImpl>(createUserActivityFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserActivityImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserActivityImpl(element));});
        writer.writeCollectionOfObjectValues<UserActivityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
