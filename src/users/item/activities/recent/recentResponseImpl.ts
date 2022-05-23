import {UserActivityImpl} from '../../../../models/';
import {createUserActivityFromDiscriminatorValue} from '../../../../models/createUserActivityFromDiscriminatorValue';
import {UserActivity} from '../../../../models/userActivity';
import {RecentResponse} from './recentResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the recent method. */
export class RecentResponseImpl implements AdditionalDataHolder, Parsable, RecentResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: UserActivity[] | undefined;
    /**
     * Instantiates a new recentResponse and sets the default values.
     * @param recentResponseParameterValue 
     */
    public constructor(recentResponseParameterValue?: RecentResponse | undefined) {
        this.additionalData = recentResponseParameterValue?.additionalData ? recentResponseParameterValue?.additionalData! : {}
        this.value = recentResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<UserActivityImpl>(createUserActivityFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: UserActivityImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserActivityImpl(element));});
        writer.writeCollectionOfObjectValues<UserActivityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
