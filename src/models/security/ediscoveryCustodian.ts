import {createEdiscoveryIndexOperationFromDiscriminatorValue} from './createEdiscoveryIndexOperationFromDiscriminatorValue';
import {createSiteSourceFromDiscriminatorValue} from './createSiteSourceFromDiscriminatorValue';
import {createUnifiedGroupSourceFromDiscriminatorValue} from './createUnifiedGroupSourceFromDiscriminatorValue';
import {createUserSourceFromDiscriminatorValue} from './createUserSourceFromDiscriminatorValue';
import {DataSourceContainer, EdiscoveryIndexOperation, SiteSource, UnifiedGroupSource, UserSource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryCustodian extends DataSourceContainer implements Parsable {
    /** Date and time the custodian acknowledged a hold notification. */
    private _acknowledgedDateTime?: Date | undefined;
    /** Email address of the custodian. */
    private _email?: string | undefined;
    /** Operation entity that represents the latest indexing for the custodian. */
    private _lastIndexOperation?: EdiscoveryIndexOperation | undefined;
    /** Data source entity for SharePoint sites associated with the custodian. */
    private _siteSources?: SiteSource[] | undefined;
    /** Data source entity for groups associated with the custodian. */
    private _unifiedGroupSources?: UnifiedGroupSource[] | undefined;
    /** Data source entity for a the custodian. This is the container for a custodian's mailbox and OneDrive for Business site. */
    private _userSources?: UserSource[] | undefined;
    /**
     * Gets the acknowledgedDateTime property value. Date and time the custodian acknowledged a hold notification.
     * @returns a Date
     */
    public get acknowledgedDateTime() {
        return this._acknowledgedDateTime;
    };
    /**
     * Sets the acknowledgedDateTime property value. Date and time the custodian acknowledged a hold notification.
     * @param value Value to set for the acknowledgedDateTime property.
     */
    public set acknowledgedDateTime(value: Date | undefined) {
        this._acknowledgedDateTime = value;
    };
    /**
     * Instantiates a new EdiscoveryCustodian and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the email property value. Email address of the custodian.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. Email address of the custodian.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        this._email = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "acknowledgedDateTime": n => { this.acknowledgedDateTime = n.getDateValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "lastIndexOperation": n => { this.lastIndexOperation = n.getObjectValue<EdiscoveryIndexOperation>(createEdiscoveryIndexOperationFromDiscriminatorValue); },
            "siteSources": n => { this.siteSources = n.getCollectionOfObjectValues<SiteSource>(createSiteSourceFromDiscriminatorValue); },
            "unifiedGroupSources": n => { this.unifiedGroupSources = n.getCollectionOfObjectValues<UnifiedGroupSource>(createUnifiedGroupSourceFromDiscriminatorValue); },
            "userSources": n => { this.userSources = n.getCollectionOfObjectValues<UserSource>(createUserSourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastIndexOperation property value. Operation entity that represents the latest indexing for the custodian.
     * @returns a ediscoveryIndexOperation
     */
    public get lastIndexOperation() {
        return this._lastIndexOperation;
    };
    /**
     * Sets the lastIndexOperation property value. Operation entity that represents the latest indexing for the custodian.
     * @param value Value to set for the lastIndexOperation property.
     */
    public set lastIndexOperation(value: EdiscoveryIndexOperation | undefined) {
        this._lastIndexOperation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("acknowledgedDateTime", this.acknowledgedDateTime);
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue<EdiscoveryIndexOperation>("lastIndexOperation", this.lastIndexOperation);
        writer.writeCollectionOfObjectValues<SiteSource>("siteSources", this.siteSources);
        writer.writeCollectionOfObjectValues<UnifiedGroupSource>("unifiedGroupSources", this.unifiedGroupSources);
        writer.writeCollectionOfObjectValues<UserSource>("userSources", this.userSources);
    };
    /**
     * Gets the siteSources property value. Data source entity for SharePoint sites associated with the custodian.
     * @returns a siteSource
     */
    public get siteSources() {
        return this._siteSources;
    };
    /**
     * Sets the siteSources property value. Data source entity for SharePoint sites associated with the custodian.
     * @param value Value to set for the siteSources property.
     */
    public set siteSources(value: SiteSource[] | undefined) {
        this._siteSources = value;
    };
    /**
     * Gets the unifiedGroupSources property value. Data source entity for groups associated with the custodian.
     * @returns a unifiedGroupSource
     */
    public get unifiedGroupSources() {
        return this._unifiedGroupSources;
    };
    /**
     * Sets the unifiedGroupSources property value. Data source entity for groups associated with the custodian.
     * @param value Value to set for the unifiedGroupSources property.
     */
    public set unifiedGroupSources(value: UnifiedGroupSource[] | undefined) {
        this._unifiedGroupSources = value;
    };
    /**
     * Gets the userSources property value. Data source entity for a the custodian. This is the container for a custodian's mailbox and OneDrive for Business site.
     * @returns a userSource
     */
    public get userSources() {
        return this._userSources;
    };
    /**
     * Sets the userSources property value. Data source entity for a the custodian. This is the container for a custodian's mailbox and OneDrive for Business site.
     * @param value Value to set for the userSources property.
     */
    public set userSources(value: UserSource[] | undefined) {
        this._userSources = value;
    };
}
