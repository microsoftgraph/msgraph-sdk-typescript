import {IdentitySet} from '../';
import {createCaseOperationFromDiscriminatorValue} from './createCaseOperationFromDiscriminatorValue';
import {createEdiscoveryCustodianFromDiscriminatorValue} from './createEdiscoveryCustodianFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from './createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from './createEdiscoveryReviewTagFromDiscriminatorValue';
import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {AdminMember1, Case_escaped, CaseOperation, EdiscoveryCaseSettings, EdiscoveryCustodian, EdiscoveryNoncustodialDataSource, EdiscoveryReviewSet, EdiscoveryReviewTag, EdiscoverySearch} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoveryCase extends Case_escaped implements Parsable {
    /** The user who closed the case. */
    private _closedBy?: IdentitySet | AdminMember1 | undefined;
    /** The date and time when the case was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _closedDateTime?: Date | undefined;
    /** Returns a list of case ediscoveryCustodian objects for this case. */
    private _custodians?: EdiscoveryCustodian[] | undefined;
    /** The external case number for customer reference. */
    private _externalId?: string | undefined;
    /** Returns a list of case ediscoveryNoncustodialDataSource objects for this case. */
    private _noncustodialDataSources?: EdiscoveryNoncustodialDataSource[] | undefined;
    /** Returns a list of case caseOperation objects for this case. */
    private _operations?: CaseOperation[] | undefined;
    /** Returns a list of eDiscoveryReviewSet objects in the case. */
    private _reviewSets?: EdiscoveryReviewSet[] | undefined;
    /** Returns a list of eDiscoverySearch objects associated with this case. */
    private _searches?: EdiscoverySearch[] | undefined;
    /** Returns a list of eDIscoverySettings objects in the case. */
    private _settings?: EdiscoveryCaseSettings | AdminMember1 | undefined;
    /** Returns a list of ediscoveryReviewTag objects associated to this case. */
    private _tags?: EdiscoveryReviewTag[] | undefined;
    /**
     * Gets the closedBy property value. The user who closed the case.
     * @returns a admin
     */
    public get closedBy() {
        return this._closedBy;
    };
    /**
     * Sets the closedBy property value. The user who closed the case.
     * @param value Value to set for the closedBy property.
     */
    public set closedBy(value: IdentitySet | AdminMember1 | undefined) {
        this._closedBy = value;
    };
    /**
     * Gets the closedDateTime property value. The date and time when the case was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get closedDateTime() {
        return this._closedDateTime;
    };
    /**
     * Sets the closedDateTime property value. The date and time when the case was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the closedDateTime property.
     */
    public set closedDateTime(value: Date | undefined) {
        this._closedDateTime = value;
    };
    /**
     * Instantiates a new EdiscoveryCase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the custodians property value. Returns a list of case ediscoveryCustodian objects for this case.
     * @returns a ediscoveryCustodian
     */
    public get custodians() {
        return this._custodians;
    };
    /**
     * Sets the custodians property value. Returns a list of case ediscoveryCustodian objects for this case.
     * @param value Value to set for the custodians property.
     */
    public set custodians(value: EdiscoveryCustodian[] | undefined) {
        this._custodians = value;
    };
    /**
     * Gets the externalId property value. The external case number for customer reference.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The external case number for customer reference.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "closedBy": n => { this.closedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "closedDateTime": n => { this.closedDateTime = n.getDateValue(); },
            "custodians": n => { this.custodians = n.getCollectionOfObjectValues<EdiscoveryCustodian>(createEdiscoveryCustodianFromDiscriminatorValue); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "noncustodialDataSources": n => { this.noncustodialDataSources = n.getCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>(createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<CaseOperation>(createCaseOperationFromDiscriminatorValue); },
            "reviewSets": n => { this.reviewSets = n.getCollectionOfObjectValues<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
            "searches": n => { this.searches = n.getCollectionOfObjectValues<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
            "settings": n => { this.settings = n.getObjectValue<EdiscoveryCaseSettings>(createEdiscoveryCaseSettingsFromDiscriminatorValue); },
            "tags": n => { this.tags = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the noncustodialDataSources property value. Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @returns a ediscoveryNoncustodialDataSource
     */
    public get noncustodialDataSources() {
        return this._noncustodialDataSources;
    };
    /**
     * Sets the noncustodialDataSources property value. Returns a list of case ediscoveryNoncustodialDataSource objects for this case.
     * @param value Value to set for the noncustodialDataSources property.
     */
    public set noncustodialDataSources(value: EdiscoveryNoncustodialDataSource[] | undefined) {
        this._noncustodialDataSources = value;
    };
    /**
     * Gets the operations property value. Returns a list of case caseOperation objects for this case.
     * @returns a caseOperation
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. Returns a list of case caseOperation objects for this case.
     * @param value Value to set for the operations property.
     */
    public set operations(value: CaseOperation[] | undefined) {
        this._operations = value;
    };
    /**
     * Gets the reviewSets property value. Returns a list of eDiscoveryReviewSet objects in the case.
     * @returns a ediscoveryReviewSet
     */
    public get reviewSets() {
        return this._reviewSets;
    };
    /**
     * Sets the reviewSets property value. Returns a list of eDiscoveryReviewSet objects in the case.
     * @param value Value to set for the reviewSets property.
     */
    public set reviewSets(value: EdiscoveryReviewSet[] | undefined) {
        this._reviewSets = value;
    };
    /**
     * Gets the searches property value. Returns a list of eDiscoverySearch objects associated with this case.
     * @returns a ediscoverySearch
     */
    public get searches() {
        return this._searches;
    };
    /**
     * Sets the searches property value. Returns a list of eDiscoverySearch objects associated with this case.
     * @param value Value to set for the searches property.
     */
    public set searches(value: EdiscoverySearch[] | undefined) {
        this._searches = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("closedBy", this.closedBy);
        writer.writeDateValue("closedDateTime", this.closedDateTime);
        writer.writeCollectionOfObjectValues<EdiscoveryCustodian>("custodians", this.custodians);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("noncustodialDataSources", this.noncustodialDataSources);
        writer.writeCollectionOfObjectValues<CaseOperation>("operations", this.operations);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSet>("reviewSets", this.reviewSets);
        writer.writeCollectionOfObjectValues<EdiscoverySearch>("searches", this.searches);
        writer.writeObjectValue<EdiscoveryCaseSettings>("settings", this.settings);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tags", this.tags);
    };
    /**
     * Gets the settings property value. Returns a list of eDIscoverySettings objects in the case.
     * @returns a admin
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. Returns a list of eDIscoverySettings objects in the case.
     * @param value Value to set for the settings property.
     */
    public set settings(value: EdiscoveryCaseSettings | AdminMember1 | undefined) {
        this._settings = value;
    };
    /**
     * Gets the tags property value. Returns a list of ediscoveryReviewTag objects associated to this case.
     * @returns a ediscoveryReviewTag
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. Returns a list of ediscoveryReviewTag objects associated to this case.
     * @param value Value to set for the tags property.
     */
    public set tags(value: EdiscoveryReviewTag[] | undefined) {
        this._tags = value;
    };
}
