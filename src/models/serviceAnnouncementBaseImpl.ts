import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {EntityImpl, KeyValuePairImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {ServiceAnnouncementBase} from './serviceAnnouncementBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class ServiceAnnouncementBaseImpl extends EntityImpl implements Parsable, ServiceAnnouncementBase {
    /** Additional details about service event. This property doesn't support filters. */
    public details?: KeyValuePair[] | undefined;
    /** The end time of the service event. */
    public endDateTime?: Date | undefined;
    /** The last modified time of the service event. */
    public lastModifiedDateTime?: Date | undefined;
    /** The start time of the service event. */
    public startDateTime?: Date | undefined;
    /** The title of the service event. */
    public title?: string | undefined;
    /**
     * Instantiates a new serviceAnnouncementBase and sets the default values.
     * @param serviceAnnouncementBaseParameterValue 
     */
    public constructor(serviceAnnouncementBaseParameterValue?: ServiceAnnouncementBase | undefined) {
        super();
        this.details = serviceAnnouncementBaseParameterValue?.details ;
        this.endDateTime = serviceAnnouncementBaseParameterValue?.endDateTime ;
        this.lastModifiedDateTime = serviceAnnouncementBaseParameterValue?.lastModifiedDateTime ;
        this.startDateTime = serviceAnnouncementBaseParameterValue?.startDateTime ;
        this.title = serviceAnnouncementBaseParameterValue?.title ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "details": n => { this.details = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "title": n => { this.title = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.details && this.details.length != 0){        const detailsArrValue: KeyValuePairImpl[] = []; this.details?.forEach(element => {detailsArrValue.push(new KeyValuePairImpl(element));});
        writer.writeCollectionOfObjectValues<KeyValuePairImpl>("details", detailsArrValue);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.title){
        writer.writeStringValue("title", this.title);
        }
    };
}
