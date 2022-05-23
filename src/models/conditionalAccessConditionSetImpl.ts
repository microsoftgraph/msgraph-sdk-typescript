import {ConditionalAccessApplications} from './conditionalAccessApplications';
import {ConditionalAccessClientApplications} from './conditionalAccessClientApplications';
import {ConditionalAccessConditionSet} from './conditionalAccessConditionSet';
import {ConditionalAccessDevices} from './conditionalAccessDevices';
import {ConditionalAccessLocations} from './conditionalAccessLocations';
import {ConditionalAccessPlatforms} from './conditionalAccessPlatforms';
import {ConditionalAccessUsers} from './conditionalAccessUsers';
import {createConditionalAccessApplicationsFromDiscriminatorValue} from './createConditionalAccessApplicationsFromDiscriminatorValue';
import {createConditionalAccessClientApplicationsFromDiscriminatorValue} from './createConditionalAccessClientApplicationsFromDiscriminatorValue';
import {createConditionalAccessDevicesFromDiscriminatorValue} from './createConditionalAccessDevicesFromDiscriminatorValue';
import {createConditionalAccessLocationsFromDiscriminatorValue} from './createConditionalAccessLocationsFromDiscriminatorValue';
import {createConditionalAccessPlatformsFromDiscriminatorValue} from './createConditionalAccessPlatformsFromDiscriminatorValue';
import {createConditionalAccessUsersFromDiscriminatorValue} from './createConditionalAccessUsersFromDiscriminatorValue';
import {ConditionalAccessApplicationsImpl, ConditionalAccessClientApplicationsImpl, ConditionalAccessDevicesImpl, ConditionalAccessLocationsImpl, ConditionalAccessPlatformsImpl, ConditionalAccessUsersImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessConditionSetImpl implements AdditionalDataHolder, ConditionalAccessConditionSet, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Applications and user actions included in and excluded from the policy. Required. */
    public applications?: ConditionalAccessApplications | undefined;
    /** Client applications (service principals and workload identities) included in and excluded from the policy. Either users or clientApplications is required. */
    public clientApplications?: ConditionalAccessClientApplications | undefined;
    /** Client application types included in the policy. Possible values are: all, browser, mobileAppsAndDesktopClients, exchangeActiveSync, easSupported, other. Required. */
    public clientAppTypes?: string[] | undefined;
    /** Devices in the policy. */
    public devices?: ConditionalAccessDevices | undefined;
    /** Locations included in and excluded from the policy. */
    public locations?: ConditionalAccessLocations | undefined;
    /** Platforms included in and excluded from the policy. */
    public platforms?: ConditionalAccessPlatforms | undefined;
    /** Sign-in risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    public signInRiskLevels?: string[] | undefined;
    /** User risk levels included in the policy. Possible values are: low, medium, high, hidden, none, unknownFutureValue. Required. */
    public userRiskLevels?: string[] | undefined;
    /** Users, groups, and roles included in and excluded from the policy. Either users or clientApplications is required. */
    public users?: ConditionalAccessUsers | undefined;
    /**
     * Instantiates a new conditionalAccessConditionSet and sets the default values.
     * @param conditionalAccessConditionSetParameterValue 
     */
    public constructor(conditionalAccessConditionSetParameterValue?: ConditionalAccessConditionSet | undefined) {
        this.additionalData = conditionalAccessConditionSetParameterValue?.additionalData ? conditionalAccessConditionSetParameterValue?.additionalData! : {}
        this.applications = conditionalAccessConditionSetParameterValue?.applications ;
        this.clientApplications = conditionalAccessConditionSetParameterValue?.clientApplications ;
        this.clientAppTypes = conditionalAccessConditionSetParameterValue?.clientAppTypes ;
        this.devices = conditionalAccessConditionSetParameterValue?.devices ;
        this.locations = conditionalAccessConditionSetParameterValue?.locations ;
        this.platforms = conditionalAccessConditionSetParameterValue?.platforms ;
        this.signInRiskLevels = conditionalAccessConditionSetParameterValue?.signInRiskLevels ;
        this.userRiskLevels = conditionalAccessConditionSetParameterValue?.userRiskLevels ;
        this.users = conditionalAccessConditionSetParameterValue?.users ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "applications": n => { this.applications = n.getObjectValue<ConditionalAccessApplicationsImpl>(createConditionalAccessApplicationsFromDiscriminatorValue); },
            "clientApplications": n => { this.clientApplications = n.getObjectValue<ConditionalAccessClientApplicationsImpl>(createConditionalAccessClientApplicationsFromDiscriminatorValue); },
            "clientAppTypes": n => { this.clientAppTypes = n.getCollectionOfPrimitiveValues<string>(); },
            "devices": n => { this.devices = n.getObjectValue<ConditionalAccessDevicesImpl>(createConditionalAccessDevicesFromDiscriminatorValue); },
            "locations": n => { this.locations = n.getObjectValue<ConditionalAccessLocationsImpl>(createConditionalAccessLocationsFromDiscriminatorValue); },
            "platforms": n => { this.platforms = n.getObjectValue<ConditionalAccessPlatformsImpl>(createConditionalAccessPlatformsFromDiscriminatorValue); },
            "signInRiskLevels": n => { this.signInRiskLevels = n.getCollectionOfPrimitiveValues<string>(); },
            "userRiskLevels": n => { this.userRiskLevels = n.getCollectionOfPrimitiveValues<string>(); },
            "users": n => { this.users = n.getObjectValue<ConditionalAccessUsersImpl>(createConditionalAccessUsersFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.applications){
        writer.writeObjectValue<ConditionalAccessApplicationsImpl>("applications", new ConditionalAccessApplicationsImpl(this.applications));
        }
        if(this.clientApplications){
        writer.writeObjectValue<ConditionalAccessClientApplicationsImpl>("clientApplications", new ConditionalAccessClientApplicationsImpl(this.clientApplications));
        }
        if(this.clientAppTypes){
        writer.writeCollectionOfPrimitiveValues<string>("clientAppTypes", this.clientAppTypes);
        }
        if(this.devices){
        writer.writeObjectValue<ConditionalAccessDevicesImpl>("devices", new ConditionalAccessDevicesImpl(this.devices));
        }
        if(this.locations){
        writer.writeObjectValue<ConditionalAccessLocationsImpl>("locations", new ConditionalAccessLocationsImpl(this.locations));
        }
        if(this.platforms){
        writer.writeObjectValue<ConditionalAccessPlatformsImpl>("platforms", new ConditionalAccessPlatformsImpl(this.platforms));
        }
        if(this.signInRiskLevels){
        writer.writeCollectionOfPrimitiveValues<string>("signInRiskLevels", this.signInRiskLevels);
        }
        if(this.userRiskLevels){
        writer.writeCollectionOfPrimitiveValues<string>("userRiskLevels", this.userRiskLevels);
        }
        if(this.users){
        writer.writeObjectValue<ConditionalAccessUsersImpl>("users", new ConditionalAccessUsersImpl(this.users));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
