import {createDeviceInstallStateFromDiscriminatorValue} from './createDeviceInstallStateFromDiscriminatorValue';
import {createEBookInstallSummaryFromDiscriminatorValue} from './createEBookInstallSummaryFromDiscriminatorValue';
import {createManagedEBookAssignmentFromDiscriminatorValue} from './createManagedEBookAssignmentFromDiscriminatorValue';
import {createMimeContentFromDiscriminatorValue} from './createMimeContentFromDiscriminatorValue';
import {createUserInstallStateSummaryFromDiscriminatorValue} from './createUserInstallStateSummaryFromDiscriminatorValue';
import {DeviceInstallState} from './deviceInstallState';
import {EBookInstallSummary} from './eBookInstallSummary';
import {DeviceInstallStateImpl, EBookInstallSummaryImpl, EntityImpl, ManagedEBookAssignmentImpl, MimeContentImpl, UserInstallStateSummaryImpl} from './index';
import {ManagedEBook} from './managedEBook';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {MimeContent} from './mimeContent';
import {UserInstallStateSummary} from './userInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An abstract class containing the base properties for Managed eBook. */
export class ManagedEBookImpl extends EntityImpl implements ManagedEBook, Parsable {
    /** The list of assignments for this eBook. */
    public assignments?: ManagedEBookAssignment[] | undefined;
    /** The date and time when the eBook file was created. */
    public createdDateTime?: Date | undefined;
    /** Description. */
    public description?: string | undefined;
    /** The list of installation states for this eBook. */
    public deviceStates?: DeviceInstallState[] | undefined;
    /** Name of the eBook. */
    public displayName?: string | undefined;
    /** The more information Url. */
    public informationUrl?: string | undefined;
    /** Mobile App Install Summary. */
    public installSummary?: EBookInstallSummary | undefined;
    /** Book cover. */
    public largeCover?: MimeContent | undefined;
    /** The date and time when the eBook was last modified. */
    public lastModifiedDateTime?: Date | undefined;
    /** The privacy statement Url. */
    public privacyInformationUrl?: string | undefined;
    /** The date and time when the eBook was published. */
    public publishedDateTime?: Date | undefined;
    /** Publisher. */
    public publisher?: string | undefined;
    /** The list of installation states for this eBook. */
    public userStateSummary?: UserInstallStateSummary[] | undefined;
    /**
     * Instantiates a new managedEBook and sets the default values.
     * @param managedEBookParameterValue 
     */
    public constructor(managedEBookParameterValue?: ManagedEBook | undefined) {
        super();
        this.assignments = managedEBookParameterValue?.assignments ;
        this.createdDateTime = managedEBookParameterValue?.createdDateTime ;
        this.description = managedEBookParameterValue?.description ;
        this.deviceStates = managedEBookParameterValue?.deviceStates ;
        this.displayName = managedEBookParameterValue?.displayName ;
        this.informationUrl = managedEBookParameterValue?.informationUrl ;
        this.installSummary = managedEBookParameterValue?.installSummary ;
        this.largeCover = managedEBookParameterValue?.largeCover ;
        this.lastModifiedDateTime = managedEBookParameterValue?.lastModifiedDateTime ;
        this.privacyInformationUrl = managedEBookParameterValue?.privacyInformationUrl ;
        this.publishedDateTime = managedEBookParameterValue?.publishedDateTime ;
        this.publisher = managedEBookParameterValue?.publisher ;
        this.userStateSummary = managedEBookParameterValue?.userStateSummary ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<ManagedEBookAssignmentImpl>(createManagedEBookAssignmentFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "deviceStates": n => { this.deviceStates = n.getCollectionOfObjectValues<DeviceInstallStateImpl>(createDeviceInstallStateFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "informationUrl": n => { this.informationUrl = n.getStringValue(); },
            "installSummary": n => { this.installSummary = n.getObjectValue<EBookInstallSummaryImpl>(createEBookInstallSummaryFromDiscriminatorValue); },
            "largeCover": n => { this.largeCover = n.getObjectValue<MimeContentImpl>(createMimeContentFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "privacyInformationUrl": n => { this.privacyInformationUrl = n.getStringValue(); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "userStateSummary": n => { this.userStateSummary = n.getCollectionOfObjectValues<UserInstallStateSummaryImpl>(createUserInstallStateSummaryFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: ManagedEBookAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new ManagedEBookAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.deviceStates && this.deviceStates.length != 0){        const deviceStatesArrValue: DeviceInstallStateImpl[] = []; this.deviceStates?.forEach(element => {deviceStatesArrValue.push(new DeviceInstallStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceInstallStateImpl>("deviceStates", deviceStatesArrValue);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.informationUrl){
        writer.writeStringValue("informationUrl", this.informationUrl);
        }
        if(this.installSummary){
        writer.writeObjectValue<EBookInstallSummaryImpl>("installSummary", new EBookInstallSummaryImpl(this.installSummary));
        }
        if(this.largeCover){
        writer.writeObjectValue<MimeContentImpl>("largeCover", new MimeContentImpl(this.largeCover));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.privacyInformationUrl){
        writer.writeStringValue("privacyInformationUrl", this.privacyInformationUrl);
        }
        if(this.publishedDateTime){
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        }
        if(this.publisher){
        writer.writeStringValue("publisher", this.publisher);
        }
        if(this.userStateSummary && this.userStateSummary.length != 0){        const userStateSummaryArrValue: UserInstallStateSummaryImpl[] = []; this.userStateSummary?.forEach(element => {userStateSummaryArrValue.push(new UserInstallStateSummaryImpl(element));});
        writer.writeCollectionOfObjectValues<UserInstallStateSummaryImpl>("userStateSummary", userStateSummaryArrValue);
        }
    };
}
