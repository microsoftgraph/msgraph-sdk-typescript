import {createEducationClassFromDiscriminatorValue} from '../../../models/createEducationClassFromDiscriminatorValue';
import {deserializeIntoEducationClass} from '../../../models/deserializeIntoEducationClass';
import type {EducationClass} from '../../../models/educationClass';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeEducationClass} from '../../../models/serializeEducationClass';
import {AssignmentCategoriesRequestBuilder} from './assignmentCategories/assignmentCategoriesRequestBuilder';
import {AssignmentDefaultsRequestBuilder} from './assignmentDefaults/assignmentDefaultsRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {AssignmentSettingsRequestBuilder} from './assignmentSettings/assignmentSettingsRequestBuilder';
import {EducationClassItemRequestBuilderDeleteRequestConfiguration} from './educationClassItemRequestBuilderDeleteRequestConfiguration';
import {EducationClassItemRequestBuilderGetRequestConfiguration} from './educationClassItemRequestBuilderGetRequestConfiguration';
import {EducationClassItemRequestBuilderPatchRequestConfiguration} from './educationClassItemRequestBuilderPatchRequestConfiguration';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {TeachersRequestBuilder} from './teachers/teachersRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
 */
export class EducationClassItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
     */
    public get assignmentCategories(): AssignmentCategoriesRequestBuilder {
        return new AssignmentCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentDefaults property of the microsoft.graph.educationClass entity.
     */
    public get assignmentDefaults(): AssignmentDefaultsRequestBuilder {
        return new AssignmentDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.educationClass entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentSettings property of the microsoft.graph.educationClass entity.
     */
    public get assignmentSettings(): AssignmentSettingsRequestBuilder {
        return new AssignmentSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the group property of the microsoft.graph.educationClass entity.
     */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the members property of the microsoft.graph.educationClass entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationClass entity.
     */
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the teachers property of the microsoft.graph.educationClass entity.
     */
    public get teachers(): TeachersRequestBuilder {
        return new TeachersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EducationClassItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you're using the delegated token, the user will only see classes in which they are members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationClass
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationClass
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EducationClass, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an educationClass. Because a class is also a universal group, deleting a class deletes the group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve a class from the system. A class is a universal group with a special property that indicates to the system that the group is a class. Group members represent the students; group admins represent the teachers in the class. If you're using the delegated token, the user will only see classes in which they are members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the properties of an educationClass object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationClass, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationClass);
        return requestInfo;
    };
}
