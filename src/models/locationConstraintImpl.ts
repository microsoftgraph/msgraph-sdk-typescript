import {createLocationConstraintItemFromDiscriminatorValue} from './createLocationConstraintItemFromDiscriminatorValue';
import {LocationConstraintItemImpl} from './index';
import {LocationConstraint} from './locationConstraint';
import {LocationConstraintItem} from './locationConstraintItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class LocationConstraintImpl implements AdditionalDataHolder, LocationConstraint, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations. */
    public isRequired?: boolean | undefined;
    /** Constraint information for one or more locations that the client requests for the meeting. */
    public locations?: LocationConstraintItem[] | undefined;
    /** The client requests the service to suggest one or more meeting locations. */
    public suggestLocation?: boolean | undefined;
    /**
     * Instantiates a new locationConstraint and sets the default values.
     * @param locationConstraintParameterValue 
     */
    public constructor(locationConstraintParameterValue?: LocationConstraint | undefined) {
        this.additionalData = locationConstraintParameterValue?.additionalData ? locationConstraintParameterValue?.additionalData! : {}
        this.isRequired = locationConstraintParameterValue?.isRequired ;
        this.locations = locationConstraintParameterValue?.locations ;
        this.suggestLocation = locationConstraintParameterValue?.suggestLocation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
            "locations": n => { this.locations = n.getCollectionOfObjectValues<LocationConstraintItemImpl>(createLocationConstraintItemFromDiscriminatorValue); },
            "suggestLocation": n => { this.suggestLocation = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isRequired){
        writer.writeBooleanValue("isRequired", this.isRequired);
        }
        if(this.locations && this.locations.length != 0){        const locationsArrValue: LocationConstraintItemImpl[] = []; this.locations?.forEach(element => {locationsArrValue.push(new LocationConstraintItemImpl(element));});
        writer.writeCollectionOfObjectValues<LocationConstraintItemImpl>("locations", locationsArrValue);
        }
        if(this.suggestLocation){
        writer.writeBooleanValue("suggestLocation", this.suggestLocation);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
