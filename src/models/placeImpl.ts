import {createOutlookGeoCoordinatesFromDiscriminatorValue} from './createOutlookGeoCoordinatesFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {EntityImpl, OutlookGeoCoordinatesImpl, PhysicalAddressImpl} from './index';
import {OutlookGeoCoordinates} from './outlookGeoCoordinates';
import {PhysicalAddress} from './physicalAddress';
import {Place} from './place';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of place entities. */
export class PlaceImpl extends EntityImpl implements Parsable, Place {
    /** The street address of the place. */
    public address?: PhysicalAddress | undefined;
    /** The name associated with the place. */
    public displayName?: string | undefined;
    /** Specifies the place location in latitude, longitude and (optionally) altitude coordinates. */
    public geoCoordinates?: OutlookGeoCoordinates | undefined;
    /** The phone number of the place. */
    public phone?: string | undefined;
    /**
     * Instantiates a new place and sets the default values.
     * @param placeParameterValue 
     */
    public constructor(placeParameterValue?: Place | undefined) {
        super();
        this.address = placeParameterValue?.address ;
        this.displayName = placeParameterValue?.displayName ;
        this.geoCoordinates = placeParameterValue?.geoCoordinates ;
        this.phone = placeParameterValue?.phone ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "geoCoordinates": n => { this.geoCoordinates = n.getObjectValue<OutlookGeoCoordinatesImpl>(createOutlookGeoCoordinatesFromDiscriminatorValue); },
            "phone": n => { this.phone = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
        writer.writeObjectValue<PhysicalAddressImpl>("address", new PhysicalAddressImpl(this.address));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.geoCoordinates){
        writer.writeObjectValue<OutlookGeoCoordinatesImpl>("geoCoordinates", new OutlookGeoCoordinatesImpl(this.geoCoordinates));
        }
        if(this.phone){
        writer.writeStringValue("phone", this.phone);
        }
    };
}
